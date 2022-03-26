package com.example.fpis.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.fpis.entity.ZahtevZaProveromKvaliteta;

@Repository
public interface ZahtevZaProveromKvalitetaRepository extends JpaRepository<ZahtevZaProveromKvaliteta, Integer>{

	@Query("SELECT z FROM ZahtevZaProveromKvaliteta z where z.zahtevZaProveromKvalitetaId = ?1 AND z.datum = ?2")
	List<ZahtevZaProveromKvaliteta> findBySifraAndDatum(int sifraZahteva, LocalDate datumFormiranja);
	
	List<ZahtevZaProveromKvaliteta> findByZahtevZaProveromKvalitetaId(Integer sifraZahteva);

	List<ZahtevZaProveromKvaliteta> findByDatum(LocalDate datumFormiranja);

}
