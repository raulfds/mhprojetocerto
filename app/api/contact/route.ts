import { NextResponse } from "next/server"
import { Resend } from "resend"

// Configure sua API Key do Resend nas variáveis de ambiente
// RESEND_API_KEY=re_xxxxxxxxxxxxx
const resend = new Resend(process.env.RESEND_API_KEY)

// Configure o email do destinatário nas variáveis de ambiente
// CONTACT_EMAIL=seu@email.com
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "contato@solartech.com.br"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validação básica
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      )
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      )
    }

    // Verifica se a API key está configurada
    if (!process.env.RESEND_API_KEY) {
      console.log("RESEND_API_KEY não configurada. Dados recebidos:", { name, email, phone, message })
      // Retorna sucesso para desenvolvimento sem API key
      return NextResponse.json({ 
        success: true, 
        message: "Mensagem recebida (modo de desenvolvimento)" 
      })
    }

    // Envia o email usando Resend
    const { error } = await resend.emails.send({
      from: "SolarTech <onboarding@resend.dev>", // Use seu domínio verificado no Resend
      to: [CONTACT_EMAIL],
      subject: `Novo contato de ${name} - SolarTech`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f;">Novo Contato - SolarTech</h2>
          <hr style="border: 1px solid #eee;">
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <hr style="border: 1px solid #eee;">
          <h3 style="color: #1e3a5f;">Mensagem:</h3>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
          <hr style="border: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            Este email foi enviado através do formulário de contato do site SolarTech.
          </p>
        </div>
      `
    })

    if (error) {
      console.error("Erro ao enviar email:", error)
      return NextResponse.json(
        { error: "Erro ao enviar email" },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      message: "Email enviado com sucesso" 
    })

  } catch (error) {
    console.error("Erro no servidor:", error)
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}
