import { create } from "zustand";

export const usarLojaProdutos = create((set) => ({
    produtos: [],
	setProdutos: (produtos) => set({ produtos }),
    criarProduto: async(novoProduto) =>{
        if(!novoProduto.nome||!novoProduto.imagem||!novoProduto.preço){
            return{sucess:false, message: "Prencha Todos Os Campos"}
        }
        const res = await fetch("/produtos" , {
            method:"POST",
            headers: {
                "Content-Type" :"application/json"
            },
            body:JSON.stringify(novoProduto)
        })
        const data = await res.json()
        set((state) => ({ produtos: [...state.produtos, data.data] }));
		return { success: true, message: "Produto criado com sucesso" };
    }
}))