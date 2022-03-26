package com.example.fpis.entity;

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

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "radno_mesto")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RadnoMesto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "radno_mesto_id")
	private int radnoMestoId;
	@Column(name = "naziv_radnog_mesta")
	private String nazivRadnogMesta;
	@Column(name = "opis_radnog_mesta")
	private String opisRadnogMesta;
	@ManyToOne
	@JoinColumn(name = "odeljenje_id")
	private Odeljenje odeljenjeId;
	@OneToMany(mappedBy = "radnoMestoId")
	private List<Radnik> radnici;

}
