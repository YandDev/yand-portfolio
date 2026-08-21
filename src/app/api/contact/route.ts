import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {

    const body = await request.json();

    const {name, email, message} = body;

    console.log("contact form submission:", { name, email, message });

    const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "microyasso@gmail.com",
        replyTo: email,
        subject: `New message from ${name}`,
        text: `
        Name: ${name}
        Email: ${email}
        
        message:
        ${message}
        `,

    });

    if (error) {
        console.error(error);

        return Response.json(
            { success: false},
            { status: 500}
        );
    }

    return Response.json({
        success: true
    })
}