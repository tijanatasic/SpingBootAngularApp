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
@Table(name = "odeljenje")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Odeljenje {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "odeljenje_id")
	private int odeljenjeId;
	
	@Column(name = "naziv_odeljenja")
	private String nazivOdeljenja;
	
	@OneToMany(mappedBy = "odeljenjeId")
	private List<RadnoMesto> radnaMesta;

}
