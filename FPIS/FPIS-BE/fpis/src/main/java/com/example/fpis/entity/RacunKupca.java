package com.example.fpis.entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "racun_kupca")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RacunKupca {
	
	@Id
	@Column(name = "racun_kupca_id")
	@JsonProperty("racun")
	private int racunKupcaId;
	@Column(name = "rok_placanja_kupca")
	@JsonFormat(pattern="dd-MM-yyyy")
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	private LocalDate rokPlacanjaKupca;
	@Column(name = "napomena_racuna_kupca")
	private String napomenaRacunaKupca;
	
	@ManyToOne
	@JoinColumn(name = "kupac_id")
	private Kupac kupacId;
	@ManyToOne
	@JoinColumn(name = "radink_id")
	private Radnik radnikId;
	@ManyToOne
	@JoinColumn(name = "otpremnica_za_kupca_id")
	private OtpremnicaZaKupca otpremnicaZaKupcaId;
	
	@OneToMany(mappedBy = "realizacijaPlacanjaId.racunKupcaId", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<RealizacijaPlacanja> listaPlacanja;
	
	@OneToMany(mappedBy = "stavkaId.racunKupcaId", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<StavkaRacunaKupca> listaStavki;
}
