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
@Table(name = "tip_proizvoda")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TipProizvoda {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "tip_proizvoda_id")
	private int tipProizvodaId;
	
	@Column(name = "naziv_tipa_proizvoda")
	private String nazivTipaProizvoda;
	
	@OneToMany(mappedBy = "tipProizvodaId")
	private List<Proizvod> proizvodi;

}
