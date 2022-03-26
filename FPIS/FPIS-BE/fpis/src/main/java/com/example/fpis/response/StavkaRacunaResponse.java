package com.example.fpis.response;

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
public class StavkaRacunaResponse {
	
	private int stavkaRacunaId;
	private int kolicinaRobeZaPlacanje;
	private double cenaSaPopustom;
	private double rabat;
	private ProizvodResponse proizvodId;

}
