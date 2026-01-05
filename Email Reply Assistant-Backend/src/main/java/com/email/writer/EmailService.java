  package com.email.writer;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

  @Service
public class EmailService {
    private final WebClient webClient;
    private final String apiKey;

    public EmailService(WebClient.Builder webClientBuilder,
                        @Value("$(gemini.api.url}") String baseUrl,
                        @Value("${gemini.api.key}") String geminiApiKey) {
        this.webClient = webClientBuilder.baseUrl(baseUrl).build();
        this.apiKey = geminiApiKey;
    }

    public static String generateEmailReply(EmailRequest emailRequest) {

        String prompt = buildPrompt(emailRequest);
        String requestBody = String.format("""
                {
                    "contents": [
                      {
                        "parts": [
                          {
                            "text": "%s"
                          }
                        ]
                      }
                    ]
                  }""", prompt);
    }
    private static String buildPrompt(EmailRequest emailRequest) {
    StringBuilder prompt =  new StringBuilder();
    prompt.append("Generate a professional email reply for the following email:");
    if(emailRequest.getTone() !=null && !emailRequest.getTone().isEmpty()) {
        prompt.append("Use a").append(emailRequest.getTone()).append(" tone.");
    }
    prompt.append("Original Email:  \n").append(emailRequest.getEmailContent());
    return prompt.toString();
    }
}
