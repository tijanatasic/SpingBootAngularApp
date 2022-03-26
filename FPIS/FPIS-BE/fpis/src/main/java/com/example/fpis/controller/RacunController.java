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

import com.example.fpis.entity.RacunKupca;
import com.example.fpis.response.NacinPlacanjaResponse;
import com.example.fpis.response.OtpremnicaResponse;
import com.example.fpis.response.ProizvodResponse;
import com.example.fpis.response.RacunResponse;
import com.example.fpis.response.RadnikResponse;
import com.example.fpis.service.RacunService;

@RestController
@RequestMapping("racun")
public class RacunController {
	
	@Autowired
	private RacunService racunService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/sacuvajRacun")
	public void saveRacun(@RequestBody RacunKupca racunKupca) {
		racunService.saveRacun(racunKupca);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getOtpremnice")
	public List<OtpremnicaResponse> getOtpremnice(@RequestParam(name = "otpremnicaId", required = false) Integer otpremnicaId, @RequestParam(name = "datum", required = false) String datum){
		return racunService.getOtpremnice(otpremnicaId, datum);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getProizvodi")
	public List<ProizvodResponse> getProizvodi(@RequestParam(name = "proizvodId", required = false) Integer proizvodId, @RequestParam(name = "naziv", required = false) String naziv){
		return racunService.getProizvodi(proizvodId, naziv);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/izmenaRacuna")
	public void updateRacun(@RequestBody RacunKupca racunKupca) {
		racunService.updateRacun(racunKupca);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/naciniPlacanja")
	public List<NacinPlacanjaResponse> getNaciniPlacanja(){
		return racunService.getNaciniPlacanja();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/radnici")
	public List<RadnikResponse> getRadnici(){
		return racunService.getRadnici();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getMaxId")
	public int getMaxId() {
		return racunService.getMaxId();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/racuni")
	public List<RacunResponse> getRacuni(@RequestParam(name = "racunId", required = false) Integer racunId, @RequestParam(name = "datum", required = false) String datum){
		return racunService.getRacuni(racunId, datum);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/deleteRacun/{id}")
	public void obrisiRacun(@PathVariable int id) {
		racunService.delete(id);
	}
}
