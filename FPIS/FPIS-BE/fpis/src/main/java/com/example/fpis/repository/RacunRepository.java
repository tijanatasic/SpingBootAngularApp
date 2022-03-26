package com.example.fpis.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.fpis.entity.RacunKupca;

@Repository
public interface RacunRepository extends JpaRepository<RacunKupca, Integer> {

	@Query(value = "SELECT MAX(racun_kupca_id) FROM racun_kupca", nativeQuery = true)
	Integer getMaxId();

	List<RacunKupca> findByRokPlacanjaKupca(LocalDate currentDateTime);

	List<RacunKupca> findByRacunKupcaId(Integer racunId);

	@Query("SELECT r FROM RacunKupca r where r.racunKupcaId = ?1 AND r.rokPlacanjaKupca = ?2")
	List<RacunKupca> findByIdAndDate(Integer racunId, LocalDate currentDateTime);

}
