package com.example.fpis.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.fpis.entity.Proizvod;

public interface ProizvodRepository extends JpaRepository<Proizvod, Integer> {

	List<Proizvod> findByProizvodId(Integer proizvodId);

	List<Proizvod> findByNazivProizvoda(String naziv);

	@Query("SELECT p FROM Proizvod p where p.proizvodId = ?1 AND p.nazivProizvoda = ?2")
	List<Proizvod> findByIdAndNaziv(Integer proizvodId, String naziv);

}
