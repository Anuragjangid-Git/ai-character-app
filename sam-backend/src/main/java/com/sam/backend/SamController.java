package com.sam.backend;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sam")
@CrossOrigin(origins = "*")
@AllArgsConstructor
public class SamController {

    private final SamService samService;
    @PostMapping("/complementing")
    public ResponseEntity<String> processComplement(@RequestBody Request request){

        String result  = samService.processComplement(request);

        return ResponseEntity.ok(result);
    }

}
