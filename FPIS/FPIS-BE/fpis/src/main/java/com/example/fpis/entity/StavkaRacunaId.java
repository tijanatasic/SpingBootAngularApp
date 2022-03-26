package com.example.fpis.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Embeddable
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class StavkaRacunaId implements Serializable{

	@Column(name = "stavka_racuna_id")
	private int stavkaRacunaId;
	
	@ManyToOne
	@JoinColumn(name = "racun_kupca_id")
	private RacunKupca racunKupcaId;
}
