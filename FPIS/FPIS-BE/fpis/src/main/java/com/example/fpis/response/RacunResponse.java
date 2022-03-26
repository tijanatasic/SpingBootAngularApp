package com.example.fpis.response;

import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RacunResponse {
	
	private int racunKupcaId;
	@JsonFormat(pattern="dd-MM-yyyy")
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	private LocalDate rokPlacanjaKupca;
	private String napomenaRacunaKupca;
	private KupacResponse kupacId;
	private RadnikResponse radnikId;
	private OtpremnicaResponse otpremnicaZaKupcaId;
	private List<RealizacijaPlacanjaResponse> listaPlacanja;
	private List<StavkaRacunaResponse> listaStavki;
}
