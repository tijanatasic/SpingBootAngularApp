package com.example.fpis.entity;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "stavka_racuna_kupca")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StavkaRacunaKupca{
	
	@EmbeddedId
    private StavkaRacunaId stavkaId;
	
	@Column(name = "kolicina_robe_za_placanja")
	private int kolicinaRobeZaPlacanje;
	
	@Column(name = "cena_sa_popustom")
	private double cenaSaPopustom;
	
	@Column(name = "rabat")
	private double rabat;
	
	@ManyToOne
	@JoinColumn(name = "proizvod_id")
	private Proizvod proizvodId;

}
