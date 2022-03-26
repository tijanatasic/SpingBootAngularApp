package com.example.fpis.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "potrvda_o_kvalitetu")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PotvrdaOKvalitetu {
	
	@Id
	@Column(name = "potvrda_o_kvalitetu_id")
	private int potvrdaOKvalitetuId;
	@Column(name = "opis_potvrde")
	private String opisPotvrde;
	@Column(name = "datum_potvrde")
	@JsonFormat(pattern="dd-MM-yyyy")
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	private LocalDate datumPotvrde;
	@Column(name = "vrsta_robe")
	private String vrstaRobe;
	@Column(name = "mesto_izdavanja")
	private String mestoIzdavanja;
	@ManyToOne
	@JoinColumn(name = "veterinar_id")
	private Veterinar veterinarId;
	@ManyToOne
	@JoinColumn(name = "kupac_id")
	private Kupac kupacId;
	@ManyToOne
	@JoinColumn(name = "proizvod_id")
	private Proizvod proizvodId;
	@ManyToOne
	@JoinColumn(name = "zahtev_za_proverom_kvaliteta_id")
	private ZahtevZaProveromKvaliteta zahtevZaProveromKvalitetaId;
}
