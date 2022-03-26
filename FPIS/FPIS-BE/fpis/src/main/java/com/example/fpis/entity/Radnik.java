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
@Table(name = "radnik")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Radnik {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "radnik_id")
	private int radnikId;
	@Column(name = "broj_radne_knjizice")
	private Long brojRadneKnjizice;
	@Column(name = "jmbg")
	private Long jmbg;
	@Column(name = "ime_prezime")
	private String imePrezime;
	@ManyToOne
	@JoinColumn(name = "radno_mesto_id")
	private RadnoMesto radnoMestoId;
	
	@OneToMany(mappedBy = "radnikIdIzdao")
	private List<OtpremnicaZaKupca> izdateOtpremnice;
	
	@OneToMany(mappedBy = "radnikIdDoprema")
	private List<OtpremnicaZaKupca> dopremljeneOtpremnice;
	
	@OneToMany(mappedBy = "radnikId")
	private List<RacunKupca> racuniKupci;

}
