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
public class RadnoMestoResponse {
	
	private int radnoMestoId;
	private String nazivRadnogMesta;
	private String opisRadnogMesta;
	private OdeljenjeResponse odeljenjeId;

}
