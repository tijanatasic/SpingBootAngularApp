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
public class ProizvodResponse {

	private int proizvodId;
	private String nazivProizvoda;
	@JsonFormat(pattern="dd-MM-yyyy")
	private LocalDate datumProizvodnje;
	private double cena;
	private int trenutnoStanjeZaliha;

	private JedinicaMereResponse jedinicaMereId;

	private TipProizvodaResponse tipProizvodaId;
	
}
