package com.example.fpis.entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "otpremnica_za_kupca")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OtpremnicaZaKupca {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "otpremnica_za_kupca_id")
	private int otpremnicaZaKupcaId;
	@Column(name = "otpremnicu_primio")
	private String otpremnicuPrimio;
	@Column(name = "datum_dopremanja")
	@JsonFormat(pattern="dd-MM-yyyy")
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	private LocalDate datumDopremanja;
	@ManyToOne
	@JoinColumn(name = "radnik_id_doprema")
	private Radnik radnikIdDoprema;
	@ManyToOne
	@JoinColumn(name = "radnik_id_izdao")
	private Radnik radnikIdIzdao;
	@ManyToOne
	@JoinColumn(name = "kupac__id")
	private Kupac kupacId;
	@OneToMany(mappedBy = "otpremnicaZaKupcaId")
	private List<RacunKupca> racuniKupca;
}
