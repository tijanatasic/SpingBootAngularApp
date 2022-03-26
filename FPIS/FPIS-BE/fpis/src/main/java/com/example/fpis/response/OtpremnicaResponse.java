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
public class OtpremnicaResponse {
	
	private int otpremnicaZaKupcaId;
	private String otpremnicuPrimio;
	@JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate datumDopremanja;
	private RadnikResponse radnikIdDoprema;
	private RadnikResponse radnikIdIzdao;
	private KupacResponse kupacId;

}
