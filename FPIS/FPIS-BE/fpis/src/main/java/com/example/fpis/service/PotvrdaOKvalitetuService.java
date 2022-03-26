package com.example.fpis.service;

import java.util.List;

import com.example.fpis.entity.PotvrdaOKvalitetu;
import com.example.fpis.response.PotvrdaOKvalitetuResponse;
import com.example.fpis.response.ZahtevZaProveromKvalitetaResponse;

public interface PotvrdaOKvalitetuService {

	void save(PotvrdaOKvalitetu potvrdaOKvalitetu);

	List<ZahtevZaProveromKvalitetaResponse> getZahtevi(Integer sifraZahteva, String datumFormiranja);

	void update(PotvrdaOKvalitetu potvrdaOKvalitetu);

	int getMaxPotvrdaId();

	List<PotvrdaOKvalitetuResponse> getPotvrde(Integer sifraZahteva, String datumFormiranja);

	void delete(int id);

}
