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
public class VeterinarResponse {
	
	private int veterinarId;
	private String nazivFirme;
	private Long pib;
	private Long maticniBroj;
	private Long ziroRacun;
	private String email;
	private String website;

}
