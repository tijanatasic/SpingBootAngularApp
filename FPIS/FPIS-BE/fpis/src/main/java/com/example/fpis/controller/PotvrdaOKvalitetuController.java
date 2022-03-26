package com.example.fpis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.fpis.entity.PotvrdaOKvalitetu;
import com.example.fpis.response.PotvrdaOKvalitetuResponse;
import com.example.fpis.response.ZahtevZaProveromKvalitetaResponse;
import com.example.fpis.service.PotvrdaOKvalitetuService;

@RestController
@RequestMapping("kvalitet")
public class PotvrdaOKvalitetuController {

	@Autowired
	private PotvrdaOKvalitetuService potvrdaOKvalitetuService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/unosPotvrde")
	public void savePotvrda(@RequestBody PotvrdaOKvalitetu potvrdaOKvalitetu) {
		potvrdaOKvalitetuService.save(potvrdaOKvalitetu);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/zahtevi")
	public List<ZahtevZaProveromKvalitetaResponse> getZahtevi(@RequestParam(name = "sifraZahteva", required = false) Integer sifraZahteva, @RequestParam(name = "datumFormiranja", required = false) String datumFormiranja){
		return potvrdaOKvalitetuService.getZahtevi(sifraZahteva, datumFormiranja);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/potvrde")
	public List<PotvrdaOKvalitetuResponse> getPotvrde(@RequestParam(name = "sifraPotvrde", required = false) Integer sifraZahteva, @RequestParam(name = "datumFormiranja", required = false) String datumFormiranja){
		return potvrdaOKvalitetuService.getPotvrde(sifraZahteva, datumFormiranja);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/izmenaPotvrde")
	public void updatePotvrda(@RequestBody PotvrdaOKvalitetu potvrdaOKvalitetu) {
		System.out.println(potvrdaOKvalitetu);
		potvrdaOKvalitetuService.update(potvrdaOKvalitetu);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/maxId")
	public int getNextId() {
		return potvrdaOKvalitetuService.getMaxPotvrdaId();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping(value = "/obrisiPotvrdu/{id}")
	public void obrisiPotvrdu(@PathVariable int id) {
		potvrdaOKvalitetuService.delete(id);
	}
}
