import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IndexedbService {
  private db!: IDBDatabase;
  private objectStores = ['vinos'];

  constructor() {
    this.openDB();
  }

  getAllItems() {
    return new Promise((resolve, reject) => {
      const openRequest = indexedDB.open('tfg_vinos');

      openRequest.onsuccess = (event) => {
        const db = (event.target as any).result;
        const transaction = db.transaction(['vinos'], 'readonly');
        const objectStore = transaction.objectStore('vinos');
        const getAllRequest = objectStore.getAll();

        getAllRequest.onsuccess = () => {
          resolve(getAllRequest.result);
        };

        getAllRequest.onerror = () => {
          reject(`Error al obtener datos: ${getAllRequest.error}`);
        };
      };
    });
  }

  addItem(item: any) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('tfg_vinos');

      request.onerror = (event) => {
        reject(
          `Error al abrir la base de datos: ${(event.target as any).errorCode}`,
        );
      };

      request.onsuccess = (event) => {
        const db = (event.target as any).result;
        const transaction = db.transaction(['vinos'], 'readwrite');
        const objectStore = transaction.objectStore('vinos');
        const addRequest = objectStore.add(item);

        addRequest.onsuccess = () => {
          resolve(`Elemento agregado con éxito`);
        };

        addRequest.onerror = () => {
          reject(`Error al agregar el elemento: ${addRequest.error}`);
        };
      };
    });
  }

  private openDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('tfg_vinos', 1);

      request.onerror = (event) => {
        reject((event.target as any).error);
      };

      request.onsuccess = (event) => {
        this.db = (event.target as any).result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        this.db = (event.target as any).result;
        this.objectStores.forEach((storeName) => {
          if (!this.db.objectStoreNames.contains(storeName)) {
            this.db.createObjectStore(storeName, {
              keyPath: 'id',
              autoIncrement: true,
            });
          }
        });
      };
    });
  }
}
