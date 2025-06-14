"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import ActionButton from '@/components/ActionButton';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  objetivo: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  telefone?: string;
  objetivo?: string;
}

export default function InscricaoPage() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    objetivo: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro quando o usuário começa a digitar
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    }
    
    if (!formData.objetivo) {
      newErrors.objetivo = 'Selecione um objetivo';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulação de envio bem-sucedido
      console.log('Formulário enviado:', formData);
      setSubmitted(true);
      
      // Resetar formulário
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        objetivo: ''
      });
    }
  };
  
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '2rem 1rem' 
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '4rem 2rem',
        borderRadius: '8px',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          Inscreva-se no Desafio Vitalidade
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          maxWidth: '800px', 
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Transforme sua saúde e bem-estar em apenas 30 dias com nosso programa cientificamente desenvolvido.
        </p>
      </div>

      {/* Formulário ou Mensagem de Sucesso */}
      {submitted ? (
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '3rem 2rem',
          borderRadius: '8px',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#4CAF50',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem auto'
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h2 style={{ 
            fontSize: '2rem', 
            color: '#343A40', 
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Inscrição Recebida!
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#555',
            maxWidth: '600px',
            margin: '0 auto 2rem auto',
            lineHeight: '1.6'
          }}>
            Obrigado por se inscrever no Desafio Vitalidade. Entraremos em contato em breve com mais informações sobre o programa.
          </p>
          <button 
            onClick={() => setSubmitted(false)} 
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            Nova Inscrição
          </button>
        </div>
      ) : (
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label 
                htmlFor="nome" 
                style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  color: '#343A40'
                }}
              >
                Nome completo*
              </label>
              <input 
                type="text" 
                id="nome" 
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                style={{ 
                  width: '100%', 
                  padding: '0.75rem', 
                  border: errors.nome ? '1px solid #dc3545' : '1px solid #ced4da', 
                  borderRadius: '4px',
                  fontSize: '1rem'
                }} 
                placeholder="Seu nome completo"
              />
              {errors.nome && (
                <p style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                  {errors.nome}
                </p>
              )}
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label 
                htmlFor="email" 
                style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  color: '#343A40'
                }}
              >
                E-mail*
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ 
                  width: '100%', 
                  padding: '0.75rem', 
                  border: errors.email ? '1px solid #dc3545' : '1px solid #ced4da', 
                  borderRadius: '4px',
                  fontSize: '1rem'
                }} 
                placeholder="seu.email@exemplo.com"
              />
              {errors.email && (
                <p style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                  {errors.email}
                </p>
              )}
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label 
                htmlFor="telefone" 
                style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  color: '#343A40'
                }}
              >
                Telefone*
              </label>
              <input 
                type="tel" 
                id="telefone" 
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                style={{ 
                  width: '100%', 
                  padding: '0.75rem', 
                  border: errors.telefone ? '1px solid #dc3545' : '1px solid #ced4da', 
                  borderRadius: '4px',
                  fontSize: '1rem'
                }} 
                placeholder="(00) 00000-0000"
              />
              {errors.telefone && (
                <p style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                  {errors.telefone}
                </p>
              )}
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <label 
                htmlFor="objetivo" 
                style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '500',
                  color: '#343A40'
                }}
              >
                Qual seu principal objetivo?*
              </label>
              <select 
                id="objetivo" 
                name="objetivo"
                value={formData.objetivo}
                onChange={handleChange}
                style={{ 
                  width: '100%', 
                  padding: '0.75rem', 
                  border: errors.objetivo ? '1px solid #dc3545' : '1px solid #ced4da', 
                  borderRadius: '4px',
                  fontSize: '1rem',
                  backgroundColor: 'white'
                }}
              >
                <option value="">Selecione uma opção</option>
                <option value="perda-peso">Perda de peso</option>
                <option value="ganho-energia">Mais energia e disposição</option>
                <option value="saude-mental">Melhorar saúde mental</option>
                <option value="longevidade">Aumentar longevidade</option>
                <option value="outros">Outros</option>
              </select>
              {errors.objetivo && (
                <p style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                  {errors.objetivo}
                </p>
              )}
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <button 
                type="submit" 
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  width: '100%',
                  maxWidth: '400px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#45a049';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#4CAF50';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                Inscrever-se Agora
              </button>
              <p style={{ 
                fontSize: '0.875rem', 
                color: '#6c757d', 
                marginTop: '1rem' 
              }}>
                Ao se inscrever, você concorda com nossos termos de uso e política de privacidade.
              </p>
            </div>
          </form>
        </div>
      )}
      
      {/* Informações Adicionais */}
      <div style={{
        marginTop: '3rem',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          color: '#343A40', 
          marginBottom: '1rem',
          fontWeight: '600'
        }}>
          Por que participar do Desafio Vitalidade?
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '2rem auto'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            borderTop: '4px solid #2E8B57'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              color: '#2E8B57', 
              marginBottom: '0.75rem',
              fontWeight: '600'
            }}>
              Abordagem Multidisciplinar
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Combinamos medicina regenerativa, nutrologia e saúde mental para uma transformação completa.
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            borderTop: '4px solid #2E8B57'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              color: '#2E8B57', 
              marginBottom: '0.75rem',
              fontWeight: '600'
            }}>
              Baseado em Ciência
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Protocolos fundamentados em pesquisas científicas recentes sobre longevidade e bem-estar.
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            borderTop: '4px solid #2E8B57'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              color: '#2E8B57', 
              marginBottom: '0.75rem',
              fontWeight: '600'
            }}>
              Resultados Comprovados
            </h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Centenas de participantes já transformaram sua saúde e qualidade de vida com nosso programa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

