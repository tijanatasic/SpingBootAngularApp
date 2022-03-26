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
@Table(name = "jedinica_mere")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class JedinicaMere {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "jedinica_mere_id")
	private int jedinicaMereId;
	@Column(name = "naziv_jedinice_mere")
	private String nazivJediniceMere;
	
	@OneToMany(mappedBy = "jedinicaMereId")
	private List<Proizvod> proizvodi;
}
