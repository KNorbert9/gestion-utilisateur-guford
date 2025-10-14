// Fonction pour convertir un fichier en Base64 et le stocker dans le LocalStorage
export function convertFileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result?.toString().split(',')[1]; // Récupérer la partie Base64
      if (base64String) {
        console.log('base64String', base64String);
        resolve(base64String); // Retourner la chaîne Base64
      } else {
        reject('Erreur : Impossible de convertir le fichier en Base64.');
      }
    };

    reader.onerror = (error) => {
      reject(`Erreur lors de la lecture du fichier: ${error}`);
    };

    reader.readAsDataURL(file); // Lire le fichier et le convertir en Base64
  });
}

/**
 * Convertit un Blob en chaîne Base64 (sans préfixe "data:...").
 *
 * @param blob - Le Blob à convertir
 * @returns Une Promise qui se résout avec la chaîne Base64 (sans la partie "data:...").
 */
export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      // reader.result contiendra quelque chose comme : "data:application/pdf;base64,JVBERi0xLjQK..."
      const result = reader.result?.toString();
      if (result) {
        // Si vous ne voulez que la partie Base64, on split sur la virgule :
        const base64String = result.split(',')[1];
        if (base64String) {
          resolve(base64String);
        } else {
          reject('Erreur : impossible de trouver la portion Base64 après la virgule.');
        }
      } else {
        reject('Erreur : la lecture du Blob a retourné un résultat vide ou non défini.');
      }
    };

    reader.onerror = (error) => {
      reject(`Erreur lors de la lecture du Blob : ${error}`);
    };

    // Lance la lecture du blob en DataURL, ce qui déclenche onload ou onerror
    reader.readAsDataURL(blob);
  });
}

export function convertFileToBase64AndStore(file: File, keyStorage: string) {
  const reader = new FileReader();

  reader.onload = () => {
    const base64String = reader.result?.toString().split(',')[1]; // Récupérer la partie Base64
    if (base64String) {
      localStorage.setItem(keyStorage, base64String); // Stocker dans le LocalStorage
      console.log('Fichier converti et stocké en Base64.');
    }
  };

  reader.onerror = (error) => {
    console.error('Erreur lors de la lecture du fichier:', error);
  };

  reader.readAsDataURL(file); // Lire le fichier et le convertir en Base64
}

// Fonction pour récupérer le fichier Base64 depuis le LocalStorage et le reconvertir en objet Blob
export function getFileFromBase64AndStore(keyStorage: string) {
  const base64String = localStorage.getItem(keyStorage); // Récupérer la Base64 depuis le LocalStorage

  if (base64String) {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' }); // Changez le type si nécessaire

    // Créer un fichier à partir du Blob (ajustez le nom du fichier si nécessaire)
    return new File([blob], 'fileFromLocalStorage.pdf', {
      type: 'application/pdf',
    });
  }

  console.error('Aucun fichier trouvé dans le LocalStorage.');
  return null;
}


export function getBlobFromLocalStorage(base64Stringg: string): Blob | null {
  const base64String = base64Stringg;

  if (base64String) {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    // Créer un Blob à partir du tableau d'octets
    return new Blob([byteArray], { type: 'application/pdf' }); // Changez le type si nécessaire
  }

  console.error('Aucun fichier trouvé dans le LocalStorage.');
  return null;
}
