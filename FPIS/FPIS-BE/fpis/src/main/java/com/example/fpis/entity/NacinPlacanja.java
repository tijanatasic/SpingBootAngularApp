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
@Table(name = "nacin_placanja")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class NacinPlacanja {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "nacin_placanja_id")
	private int nacinPlacanjaId;
	
	@Column(name = "naziv")
	private String naziv;

	@OneToMany(mappedBy = "realizacijaPlacanjaId.nacinPlacanjaId")
	private List<RealizacijaPlacanja> listaPlacanja;
}
