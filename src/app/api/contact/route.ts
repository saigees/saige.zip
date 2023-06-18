import { NextResponse } from "next/server";
import { z } from "zod";
import { env } from "~/env.mjs";
import { resolveColorForDiscord } from "~/lib/utils";
import { COLOURS } from "~/lib/vars";

const schema = z.object({
  email: z.string().email(),
  content: z.string().max(500).min(10),
});

export async function POST(req: Request) {
  try {
    const { content, email } = schema.parse(await req.json());
    const res = await fetch(env.DISCORD_WEBHOOK, {
      body: JSON.stringify({
        embeds: [
          {
            description: `${content}`,
            author: {
              name: `${email}`,
            },
            color: resolveColorForDiscord(COLOURS[Math.floor(Math.random() * COLOURS.length)] as string)
          },
        ],
        username: `${email}`,
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    if (res.status >= 400) {
      return NextResponse.json({
        ok: false,
      });
    }

    return NextResponse.json({
      ok: true,
    });
  } catch (err) {
    return NextResponse.json({
      ok: false,
    });
  }
}
