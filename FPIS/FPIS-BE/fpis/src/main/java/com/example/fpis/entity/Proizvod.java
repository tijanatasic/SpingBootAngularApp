package com.example.fpis.entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
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
@Table(name = "proizvod")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Proizvod {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "proizvod_id")
	private int proizvodId;
	@Column(name = "naziv_proizvoda")
	private String nazivProizvoda;
	@Column(name = "datum_proizvodnje")
	@JsonFormat(pattern="dd-MM-yyyy")
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	private LocalDate datumProizvodnje;
	@Column(name = "cena")
	private double cena;
	@Column(name = "trenutno_stanje_zaliha")
	private int trenutnoStanjeZaliha;
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "jedinica_mere_id")
	private JedinicaMere jedinicaMereId;
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "tip_proizvoda_id")
	private TipProizvoda tipProizvodaId;
	
	@OneToMany(mappedBy = "proizvodId")
	private List<ZahtevZaProveromKvaliteta> listaZahteva;
	
	@OneToMany(mappedBy = "proizvodId")
	private List<PotvrdaOKvalitetu> potvrdeOKvalitetu;
	
	@OneToMany(mappedBy = "proizvodId")
	private List<StavkaRacunaKupca> listaStavki;

}
