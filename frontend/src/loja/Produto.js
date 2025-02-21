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
    },
    mostarProdutos: async () => {
		const res = await fetch("/produtos");
		const data = await res.json();
		set({ produtos: data.data });
	},
    deletarProduto: async (pid) => {
		const res = await fetch(`/produtos/${pid}`, {
			method: "DELETE",
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		// update the ui immediately, without needing a refresh
		set((state) => ({ produtos: state.produtos.filter((produto) => produto._id !== pid) }));
		return { success: true, message: data.message };
	},
    
}))