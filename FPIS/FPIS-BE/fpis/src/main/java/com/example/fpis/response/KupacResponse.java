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
public class KupacResponse {
	
	private int kupacId;
	private String nazivKupca;
	private Long pibKupca;
	private Long maticniBroj;
	private Long ziroRacun;
	private String email;
	private String website;

}
