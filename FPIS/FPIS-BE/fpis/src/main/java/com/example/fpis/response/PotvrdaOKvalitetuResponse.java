package com.example.fpis.response;

import java.time.LocalDate;

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
public class PotvrdaOKvalitetuResponse {
	
	private int potvrdaOKvalitetuId;
	private String opisPotvrde;
	@JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate datumPotvrde;
	private String vrstaRobe;
	private String mestoIzdavanja;
	private VeterinarResponse veterinarId;
	private KupacResponse kupacId;
	private ProizvodResponse proizvodId;
	private ZahtevZaProveromKvalitetaResponse zahtevZaProveromKvalitetaId;

}
