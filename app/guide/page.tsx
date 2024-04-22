'use client'

import React from 'react';
import { List } from "flowbite-react";
import { HiArrowRight as listIcon } from "react-icons/hi";
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Guide() {

    const { push } = useRouter();


    return (
        <div className="flex flex-col">
            <div className="flex items-center mb-3 justify-center"> {/* Use flex container to align items */}
                <div className="text-3xl bg-gradient-to-br from-purple-300 to-cyan-200 text-transparent bg-clip-text my-3">
                    Guide d&apos;utilisation de l&apos;application
                </div>
            </div>
            <div>L&apos;application &lsquo;Batman Chatbot&lsquo; met à disposition un assistant de requêtage en langage naturel, et se base sur les données &lsquo;BATMAN&lsquo;. Vous posez votre question en Français, et l&apos;assistant tente de vous répondre à partir des données à sa disposition. Le menu sur la gauche permet de naviguer entre les différentes pages de l&apos;application :
                <List className="my-2 !text-gray-200">
                    <List.Item icon={listIcon}>La page&nbsp;<Link href="/chatbot" className="text-blue-600  contents">Chatbot</Link>&nbsp;permet de poser des questions à l&apos;assistant.</List.Item>
                    <List.Item icon={listIcon}>La page&nbsp;<Link href="/edit" className="text-blue-600  contents">Éditeur SQL</Link>&nbsp;permet de saisir manuellement une requête SQL pour interroger les données.</List.Item>
                    <List.Item icon={listIcon}>La page&nbsp;<Link href="/tables" className="text-blue-600  contents">Tables</Link>&nbsp;permet de consulter la liste des tables et des colonnes disponibles.</List.Item>
                </List>
            </div>
        </div>
    );
}
