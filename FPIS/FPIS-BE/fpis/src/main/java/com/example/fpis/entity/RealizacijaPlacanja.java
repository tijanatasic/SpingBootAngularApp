package com.example.fpis.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "realizuje")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RealizacijaPlacanja{
	
	@EmbeddedId
	private RealizacijaPlacanjaId realizacijaPlacanjaId;

}
