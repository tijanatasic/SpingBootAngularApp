package com.example.fpis.service.impl;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.fpis.entity.PotvrdaOKvalitetu;
import com.example.fpis.entity.ZahtevZaProveromKvaliteta;
import com.example.fpis.repository.PotvrdaOKvalitetuRepository;
import com.example.fpis.repository.ZahtevZaProveromKvalitetaRepository;
import com.example.fpis.response.PotvrdaOKvalitetuResponse;
import com.example.fpis.response.ZahtevZaProveromKvalitetaResponse;
import com.example.fpis.service.PotvrdaOKvalitetuService;

@Service
public class PotvrdaOKvalitetuServiceImpl implements PotvrdaOKvalitetuService {

	@Autowired
	private PotvrdaOKvalitetuRepository potvrdaOKvalitetuRepository;

	@Autowired
	private ZahtevZaProveromKvalitetaRepository zahtevZaProveromKvalitetaRepository;

	@Override
	@Transactional
	public void save(PotvrdaOKvalitetu potvrdaOKvalitetu) {
		potvrdaOKvalitetuRepository.save(potvrdaOKvalitetu);
	}

	@Override
	@Transactional
	public List<ZahtevZaProveromKvalitetaResponse> getZahtevi(Integer sifraZahteva, String datumFormiranja) {
		List<ZahtevZaProveromKvaliteta> zahtevi = null;

		if (sifraZahteva != null && datumFormiranja == null) {
			zahtevi = zahtevZaProveromKvalitetaRepository.findByZahtevZaProveromKvalitetaId(sifraZahteva);
		}
		if (sifraZahteva == null && datumFormiranja != null) {
			zahtevi = zahtevZaProveromKvalitetaRepository.findByDatum(getCurrentDateTime(datumFormiranja));
		}
		if (sifraZahteva != null && datumFormiranja != null) {
			zahtevi = zahtevZaProveromKvalitetaRepository.findBySifraAndDatum(sifraZahteva,
					getCurrentDateTime(datumFormiranja));
		}

		List<ZahtevZaProveromKvalitetaResponse> rezultat = new ArrayList<>();
		ModelMapper mapper = new ModelMapper();
		for (ZahtevZaProveromKvaliteta zahtevZaProveromKvaliteta : zahtevi) {
			rezultat.add(mapper.map(zahtevZaProveromKvaliteta, ZahtevZaProveromKvalitetaResponse.class));
		}
		return rezultat;
	}

	@Override
	@Transactional
	public void update(PotvrdaOKvalitetu potvrdaOKvalitetu) {
		potvrdaOKvalitetuRepository.save(potvrdaOKvalitetu);
	}

	public static LocalDate getCurrentDateTime(String date) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
		LocalDate localDate = LocalDate.parse(date, formatter);
		System.out.println(localDate);
		return localDate;
	}

	@Override
	public int getMaxPotvrdaId() {
		Integer id = potvrdaOKvalitetuRepository.getMaxId();
		if(id == null) return 1;
		return id + 1;
	}

	@Override
	public List<PotvrdaOKvalitetuResponse> getPotvrde(Integer sifraZahteva, String datumFormiranja) {
		List<PotvrdaOKvalitetu> zahtevi = null;

		if (sifraZahteva != null && datumFormiranja == null) {
			zahtevi = potvrdaOKvalitetuRepository.findByPotvrdaOKvalitetuId(sifraZahteva);
		}
		if (sifraZahteva == null && datumFormiranja != null) {
			zahtevi = potvrdaOKvalitetuRepository.findByDatumPotvrde(getCurrentDateTime(datumFormiranja));
		}
		if (sifraZahteva != null && datumFormiranja != null) {
			zahtevi = potvrdaOKvalitetuRepository.findBySifraAndDatum(sifraZahteva,
					getCurrentDateTime(datumFormiranja));
		}

		List<PotvrdaOKvalitetuResponse> rezultat = new ArrayList<>();
		ModelMapper mapper = new ModelMapper();
		
		for (PotvrdaOKvalitetu potvrda : zahtevi) {
			rezultat.add(mapper.map(potvrda, PotvrdaOKvalitetuResponse.class));
		}
		return rezultat;
	}

	@Override
	public void delete(int id) {
		potvrdaOKvalitetuRepository.deleteById(id);
		
	}
}
