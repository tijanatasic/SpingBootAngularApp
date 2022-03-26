package com.example.fpis.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.fpis.entity.OtpremnicaZaKupca;

@Repository
public interface OtpremnicaRepository extends JpaRepository<OtpremnicaZaKupca, Integer> {

	@Query("SELECT o FROM OtpremnicaZaKupca o where o.otpremnicaZaKupcaId = ?1 AND o.datumDopremanja = ?2")
	List<OtpremnicaZaKupca> findByIdAndDate(int otpremnicaId, LocalDate datum);

	List<OtpremnicaZaKupca> findByDatumDopremanja(LocalDate datum);

	List<OtpremnicaZaKupca> findByOtpremnicaZaKupcaId(Integer otpremnicaId);

}
