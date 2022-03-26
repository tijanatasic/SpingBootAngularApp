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
@Table(name = "veterinar")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Veterinar {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "veterinar_id")
	private int veterinarId;
	@Column(name = "naziv_firme")
	private String nazivFirme;
	@Column(name = "pib")
	private Long pib;
	@Column(name = "maticni_broj")
	private Long maticniBroj;
	@Column(name = "ziro_racun")
	private Long ziroRacun;
	@Column(name = "email")
	private String email;
	@Column(name = "website")
	private String website;
	
	@OneToMany(mappedBy = "veterinarId")
	private List<ZahtevZaProveromKvaliteta> listaZahteva;
	
	@OneToMany(mappedBy = "veterinarId")
	private List<PotvrdaOKvalitetu> potvrdeOKvalitetu;

}
