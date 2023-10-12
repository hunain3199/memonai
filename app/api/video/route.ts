import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";

import { NextResponse } from "next/server";
import Replicate from "replicate"



const replicate = new Replicate({
  auth:process.env.REPLICATE_API_TOKEN!
});

export async function POST(
  req: Request
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt  } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

   

    if (!prompt) {
      return new NextResponse("Prompts are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
    }

    const response = await replicate.run(
      "nightmareai/cogvideo:00b1c7885c5f1d44b51bcb56c378abc8f141eeacf94c1e64998606515fe63a8d",
      {
        input: {
          prompt: prompt
        }
      }
    );



  
    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(response);
  } catch (error) {
    console.log('[VIDEO_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}; 