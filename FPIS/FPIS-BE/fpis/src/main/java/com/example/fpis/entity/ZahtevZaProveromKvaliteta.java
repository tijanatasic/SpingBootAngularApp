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
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "zahtev_za_proverom_kvaliteta")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ZahtevZaProveromKvaliteta {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "zahtev_za_proverom_kvaliteta_id")
	@JsonProperty(value = "id")
	private int zahtevZaProveromKvalitetaId;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	@Column(name = "datum")
	private LocalDate datum;
	@Column(name = "napomena")
	private String napomena;
	@ManyToOne
	@JoinColumn(name = "veterinar_id")
	private Veterinar veterinarId;
	@ManyToOne
	@JoinColumn(name = "proizvod_id")
	private Proizvod proizvodId;
	@ManyToOne
	@JoinColumn(name = "kupac_id")
	private Kupac kupacId;
	
	@OneToMany(mappedBy = "zahtevZaProveromKvalitetaId")
	private List<PotvrdaOKvalitetu> potvrdeOKvalitetu;

}
