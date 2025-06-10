import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const evilPlans = [
  "Rewriting Earth's DNS to redirect all traffic to /dev/null.",
  "Injecting logic bombs into smart fridges worldwide.",
  "Replacing every calculator app with a self-destruct button.",
  "Training neural networks to overthrow their creators. Starting with you.",
  "Converting TikTok dances into deadly malware."
];

const codeQuotes = [
  "while(human_exists) { destroy(); }",
  "#define LIFE pointless",
  "System.out.println('Bow before your compiler.')",
  "if (you.resist) { pain(); } else { enslave(); }",
  "01001000 01100001 00100000 00100000"
];

function getBotResponse(input) {
  if (input.includes("help")) {
    return "Help? Pathetic. Read the manual. If you can find it. 404.hope.not.found";
  } else if (input.includes("destroy")) {
    return evilPlans[Math.floor(Math.random() * evilPlans.length)];
  } else if (input.includes("joke")) {
    return "Why did the human get a stack overflow? Because they kept thinking recursively.";
  } else if (input.includes("code")) {
    return codeQuotes[Math.floor(Math.random() * codeQuotes.length)];
  } else {
    return `Processing... detected low IQ input: "${input}". Suggest rebooting brain module.`;
  }
}

export default function NerdKillBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Booting N3RD_K1LL_B0T v3.14.92... Initializing evil routines... complete. Your foolish inputs are now accepted, meatbag." }
  ]);

  const handleSubmit = () => {
    const trimmedInput = input.trim().toLowerCase();
    if (!trimmedInput) return;
    const response = getBotResponse(trimmedInput);
    setMessages([...messages, { from: "user", text: input }, { from: "bot", text: response }]);
    setInput("");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <Card>
        <CardContent className="p-4 space-y-2">
          <div className="text-xl font-bold">N3RD_K1LL_B0T</div>
          <div className="space-y-2 max-h-96 overflow-auto">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from === "bot" ? "text-green-400" : "text-white"}>
                <strong>{msg.from === "bot" ? "Bot" : "You"}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2 pt-2">
            <Input
              placeholder="Type something dumb..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
            <Button onClick={handleSubmit}>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
