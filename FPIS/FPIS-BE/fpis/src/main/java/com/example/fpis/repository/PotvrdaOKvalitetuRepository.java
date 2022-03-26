package com.example.fpis.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.fpis.entity.PotvrdaOKvalitetu;

@Repository
public interface PotvrdaOKvalitetuRepository extends JpaRepository<PotvrdaOKvalitetu, Integer> {

	@Query(value = "SELECT MAX(potvrda_o_kvalitetu_id) FROM potrvda_o_kvalitetu", nativeQuery = true)
	Integer getMaxId();
	
	List<PotvrdaOKvalitetu> findByPotvrdaOKvalitetuId(Integer sifraZahteva);

	List<PotvrdaOKvalitetu> findByDatumPotvrde(LocalDate currentDateTime);

	@Query("SELECT p FROM PotvrdaOKvalitetu p where p.potvrdaOKvalitetuId = ?1 AND p.datumPotvrde = ?2")
	List<PotvrdaOKvalitetu> findBySifraAndDatum(Integer sifraZahteva, LocalDate currentDateTime);

}
