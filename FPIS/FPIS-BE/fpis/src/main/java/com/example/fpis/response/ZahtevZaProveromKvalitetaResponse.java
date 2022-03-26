package com.example.fpis.response;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

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
public class ZahtevZaProveromKvalitetaResponse {
	
	@JsonProperty(value = "id")
	private int zahtevZaProveromKvalitetaId;
	@JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate datum;
	private String napomena;
	private VeterinarResponse veterinarId;
	private ProizvodResponse proizvodId;
	private KupacResponse kupacId;

}
