package com.example.fpis.service;

import java.util.List;

import com.example.fpis.entity.RacunKupca;
import com.example.fpis.response.NacinPlacanjaResponse;
import com.example.fpis.response.OtpremnicaResponse;
import com.example.fpis.response.ProizvodResponse;
import com.example.fpis.response.RacunResponse;
import com.example.fpis.response.RadnikResponse;

public interface RacunService {

	void saveRacun(RacunKupca racunKupca);

	List<OtpremnicaResponse> getOtpremnice(Integer otpremnicaId, String datum);

	List<ProizvodResponse> getProizvodi(Integer proizvodId, String naziv);

	void updateRacun(RacunKupca racunKupca);

	List<NacinPlacanjaResponse> getNaciniPlacanja();

	int getMaxId();

	List<RadnikResponse> getRadnici();

	List<RacunResponse> getRacuni(Integer racunId, String datum);

	void delete(int id);

}
