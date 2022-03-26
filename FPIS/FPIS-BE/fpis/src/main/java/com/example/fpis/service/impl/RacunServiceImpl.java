package com.example.fpis.service.impl;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.fpis.entity.NacinPlacanja;
import com.example.fpis.entity.OtpremnicaZaKupca;
import com.example.fpis.entity.Proizvod;
import com.example.fpis.entity.RacunKupca;
import com.example.fpis.entity.Radnik;
import com.example.fpis.entity.RealizacijaPlacanja;
import com.example.fpis.entity.StavkaRacunaKupca;
import com.example.fpis.repository.NacinPlacanjaRepository;
import com.example.fpis.repository.OtpremnicaRepository;
import com.example.fpis.repository.ProizvodRepository;
import com.example.fpis.repository.RacunRepository;
import com.example.fpis.repository.RadnikRepository;
import com.example.fpis.response.NacinPlacanjaResponse;
import com.example.fpis.response.OtpremnicaResponse;
import com.example.fpis.response.ProizvodResponse;
import com.example.fpis.response.RacunResponse;
import com.example.fpis.response.RadnikResponse;
import com.example.fpis.service.RacunService;

@Service
public class RacunServiceImpl implements RacunService {
	
	@Autowired
	private RacunRepository racunRepository;
	
	@Autowired
	private OtpremnicaRepository otpremnicaRepository;
	
	@Autowired
	private ProizvodRepository proizvodRepository;
	
	@Autowired
	private NacinPlacanjaRepository nacinPlacanjaRepository;
	
	@Autowired
	private RadnikRepository radnikRepository;
	
	@Override
	@Transactional
	public void saveRacun(RacunKupca racunKupca) {
		for (StavkaRacunaKupca a : racunKupca.getListaStavki()) {
			a.getStavkaId().setRacunKupcaId(racunKupca);
		}
		for(RealizacijaPlacanja r : racunKupca.getListaPlacanja()) {
			r.getRealizacijaPlacanjaId().setRacunKupcaId(racunKupca);
		}
		racunRepository.save(racunKupca);
	}

	@Override
	@Transactional
	public List<OtpremnicaResponse> getOtpremnice(Integer otpremnicaId, String datum) {
		List<OtpremnicaZaKupca> otpremnice = null;
		if(otpremnicaId == null && datum != null) {
			otpremnice = otpremnicaRepository.findByDatumDopremanja(getCurrentDateTime(datum));
		}
		if(otpremnicaId != null && datum == null) {
			otpremnice = otpremnicaRepository.findByOtpremnicaZaKupcaId(otpremnicaId);
		}
		if(otpremnicaId != null && datum != null) {
			otpremnice = otpremnicaRepository.findByIdAndDate(otpremnicaId, getCurrentDateTime(datum));
		}
		
		List<OtpremnicaResponse> result = new ArrayList<>();
		ModelMapper mapper = new ModelMapper();
		for (OtpremnicaZaKupca otpremnica : otpremnice) {
			result.add(mapper.map(otpremnica, OtpremnicaResponse.class));
		}
		return result;
	}

	@Override
	@Transactional
	public List<ProizvodResponse> getProizvodi(Integer proizvodId, String naziv) {
		
		List<Proizvod> proizvodi = null;
		
		if(proizvodId != null && naziv == null) {
			proizvodi = proizvodRepository.findByProizvodId(proizvodId);
		}
		if(proizvodId == null && naziv != null) {
			proizvodi = proizvodRepository.findByNazivProizvoda(naziv);
		}
		if(proizvodId != null && naziv != null) {
			proizvodi = proizvodRepository.findByIdAndNaziv(proizvodId, naziv);
		}
		
		List<ProizvodResponse> response = new ArrayList<>();
		ModelMapper mapper = new ModelMapper();

		for (Proizvod p : proizvodi) {
			response.add(mapper.map(p, ProizvodResponse.class));
		}
		
		return response;
	}

	@Override
	@Transactional
	public void updateRacun(RacunKupca racunKupca) {
		for (StavkaRacunaKupca a : racunKupca.getListaStavki()) {
			a.getStavkaId().setRacunKupcaId(racunKupca);
		}
		for(RealizacijaPlacanja r : racunKupca.getListaPlacanja()) {
			r.getRealizacijaPlacanjaId().setRacunKupcaId(racunKupca);
		}
		racunRepository.saveAndFlush(racunKupca);
		
	}
	
	public static LocalDate getCurrentDateTime(String date) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
		LocalDate localDate = LocalDate.parse(date, formatter);
		System.out.println(localDate);
		return localDate;
	}

	@Override
	public List<NacinPlacanjaResponse> getNaciniPlacanja() {
		List<NacinPlacanja> nacini = nacinPlacanjaRepository.findAll();
		List<NacinPlacanjaResponse> result = new ArrayList<>();
		ModelMapper mapper = new ModelMapper();
		for (NacinPlacanja nacin : nacini) {
			result.add(mapper.map(nacin, NacinPlacanjaResponse.class));
		}
		return result;
	}

	@Override
	public int getMaxId() {
		Integer id = racunRepository.getMaxId();
		if(id == null) return 1;
		return id + 1;
	}

	@Override
	public List<RadnikResponse> getRadnici() {
		List<Radnik> radnici = radnikRepository.findAll();
		List<RadnikResponse> result = new ArrayList<>();
		ModelMapper mapper = new ModelMapper();
		for (Radnik radnik : radnici) {
			result.add(mapper.map(radnik, RadnikResponse.class));
		}
		return result;
	}

	@Override
	public List<RacunResponse> getRacuni(Integer racunId, String datum) {
		List<RacunKupca> racuni = null;
		if(racunId == null && datum != null) {
			racuni = racunRepository.findByRokPlacanjaKupca(getCurrentDateTime(datum));
		}
		if(racunId != null && datum == null) {
			racuni = racunRepository.findByRacunKupcaId(racunId);
		}
		if(racunId != null && datum != null) {
			racuni = racunRepository.findByIdAndDate(racunId, getCurrentDateTime(datum));
		}
		
		List<RacunResponse> result = new ArrayList<>();
		ModelMapper mapper = new ModelMapper();
		for (RacunKupca racun : racuni) {
			result.add(mapper.map(racun, RacunResponse.class));
		}
		return result;
	}

	@Override
	public void delete(int id) {
		racunRepository.deleteById(id);
	}

}
