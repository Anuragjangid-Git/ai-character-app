package com.sam.backend;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
public class SamService {

    @Value("${gemini.api.url}")
    private String geminiApiUrl;
    @Value("${gemini.api.key}")
    private String geminiApiKey;

    private final WebClient webClient;

    public SamService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.build();

    }

    public String processComplement(Request request) {

        String prompt = builtPrompt(request);

        Map<String, Object> requestBody = Map.of (
                "contents", new Object[]{
                        Map.of("parts", new Object[]{
                                Map.of("text", prompt)
                        })
                }
        );
        String response = webClient.post().uri(geminiApiUrl+geminiApiKey)
                .bodyValue(requestBody)
                .retrieve().bodyToMono(String.class)
                .block();

        return extractTextFromResponse(response);

    }

    private String extractTextFromResponse(String response) {
        try{
            ObjectMapper mapper = new ObjectMapper();
            JsonNode rootNode = mapper.readTree(response);
            return rootNode.path("candidates").get(0)
                    .path("content")
                    .path("parts").get(0)
                    .path("text")
                    .asText();
        }catch (Exception e){
            return "Error Processing Request: " + e.getMessage();
        }
    }
    private String builtPrompt(Request request) {
        StringBuilder prompt = new StringBuilder();

        prompt.append("Read this comment and check if it is a complement like (you are awesome or handsome and other good things) or an insult or disrespect.\nJust return complement or insult");
        prompt.append("\nComment:\n").append(request.getComplement());
        return prompt.toString();
    }

}
