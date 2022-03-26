package com.example.fpis.entity;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.FetchType;
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
public class RealizacijaPlacanjaId implements Serializable{
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "racun_kupca_id")
	private RacunKupca racunKupcaId;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "nacin_placanja_id")
	private NacinPlacanja nacinPlacanjaId;

}
