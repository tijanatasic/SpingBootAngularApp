package com.example.fpis.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "kupac")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Kupac {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "kupac_id")
	private int kupacId;
	@Column(name = "naziv_kupca")
	private String nazivKupca;
	@Column(name = "pib_kupca")
	private Long pibKupca;
	@Column(name = "maticni_broj")
	private Long maticniBroj;
	@Column(name = "ziro_racun")
	private Long ziroRacun;
	@Column(name = "email")
	private String email;
	@Column(name = "website")
	private String website;
	
	@OneToMany(mappedBy = "kupacId")
	private List<OtpremnicaZaKupca> otpremniceZaKupca;
	
	@OneToMany(mappedBy = "kupacId")
	private List<RacunKupca> racuniKupci;
	
	@OneToMany(mappedBy = "kupacId")
	private List<ZahtevZaProveromKvaliteta> listaZahteva;
	
	@OneToMany(mappedBy = "kupacId")
	private List<PotvrdaOKvalitetu> potvrdeOKvalitetu;
}
