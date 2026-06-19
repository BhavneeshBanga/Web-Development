'use client'

import React, { useEffect, useState } from 'react'
import { Eye, EyeOff, Copy, Check, Trash2, Plus } from 'lucide-react'

// --- storage helpers -------------------------------------------------
// Swap these two functions for API calls later (v2) without touching
// the rest of the component.
const STORAGE_KEY = 'passop_passwords'

const loadPasswords = () => {
    if (typeof window === 'undefined') return []
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? JSON.parse(raw) : []
    } catch {
        return []
    }
}

const savePasswords = (passwords) => {
    if (typeof window === 'undefined') return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(passwords))
}
// ----------------------------------------------------------------------

const emptyForm = { site: '', username: '', password: '' }

const Manager = () => {
    const [form, setForm] = useState(emptyForm)
    const [passwords, setPasswords] = useState([])
    const [showPassword, setShowPassword] = useState(false)
    const [copiedId, setCopiedId] = useState(null)
    const [revealedId, setRevealedId] = useState(null)

    // load once on mount
    useEffect(() => {
        setPasswords(loadPasswords())
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const isFormValid = form.site.trim() && form.username.trim() && form.password.trim()

    const handleAdd = () => {
        if (!isFormValid) return

        const entry = {
            id: crypto.randomUUID(),
            site: form.site.trim(),
            username: form.username.trim(),
            password: form.password,
        }

        const updated = [...passwords, entry]
        setPasswords(updated)
        savePasswords(updated)
        setForm(emptyForm)
        setShowPassword(false)
    }

    const handleDelete = (id) => {
        const updated = passwords.filter((p) => p.id !== id)
        setPasswords(updated)
        savePasswords(updated)
    }

    const handleCopy = async (text, id) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedId(id)
            setTimeout(() => setCopiedId(null), 1500)
        } catch {
            // clipboard can fail without permissions; fail silently for now
        }
    }

    const toggleReveal = (id) => {
        setRevealedId((prev) => (prev === id ? null : id))
    }

    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#22c55e_100%)]" />

            <div className="container mx-auto px-4 py-10 max-w-2xl">
                <h1 className="text-4xl font-bold text-center text-black">
                    <span className="text-emerald-600">&lt;</span>Pass
                    <span className="text-emerald-600">OP/</span>
                    <span className="text-emerald-600">&gt;</span>
                </h1>
                <p className="text-center text-black/70 mt-1 mb-8">
                    Your own password manager
                </p>

                {/* form */}
                <div className="flex flex-col gap-4">
                    <input
                        name="site"
                        type="text"
                        value={form.site}
                        onChange={handleChange}
                        placeholder="Enter website URL"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/90 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-black"
                    />

                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            name="username"
                            type="text"
                            value={form.username}
                            onChange={handleChange}
                            placeholder="Enter username"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white/90 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-black"
                        />

                        <div className="relative w-full">
                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 bg-white/90 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-black"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((s) => !s)}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-emerald-600"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleAdd}
                        disabled={!isFormValid}
                        className="self-center flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                    >
                        <Plus size={18} />
                        Add password
                    </button>
                </div>

                {/* saved list */}
                <div className="mt-10">
                    <h2 className="text-black font-semibold mb-3">
                        Your passwords{passwords.length > 0 ? ` (${passwords.length})` : ''}
                    </h2>

                    {passwords.length === 0 ? (
                        <p className="text-black/60 text-sm">
                            Nothing saved yet — add your first password above.
                        </p>
                    ) : (
                        <ul className="flex flex-col gap-3">
                            {passwords.map((entry) => (
                                <li
                                    key={entry.id}
                                    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 bg-white/90 border border-gray-200 rounded-lg px-4 py-3"
                                >
                                    <a
                                        href={entry.site.startsWith('http') ? entry.site : `https://${entry.site}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-black font-medium truncate sm:w-1/3 hover:text-emerald-600 hover:underline"
                                    >
                                        {entry.site}
                                    </a>

                                    <div className="flex items-center gap-1 sm:w-1/3 min-w-0">
                                        <span className="text-black/80 truncate">{entry.username}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleCopy(entry.username, `u-${entry.id}`)}
                                            aria-label="Copy username"
                                            className="text-gray-400 hover:text-emerald-600 shrink-0"
                                        >
                                            {copiedId === `u-${entry.id}` ? (
                                                <Check size={15} />
                                            ) : (
                                                <Copy size={15} />
                                            )}
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-1 sm:w-1/3 min-w-0">
                                        <span className="text-black/80 truncate font-mono">
                                            {revealedId === entry.id ? entry.password : '••••••••'}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => toggleReveal(entry.id)}
                                            aria-label={revealedId === entry.id ? 'Hide password' : 'Show password'}
                                            className="text-gray-400 hover:text-emerald-600 shrink-0"
                                        >
                                            {revealedId === entry.id ? <EyeOff size={15} /> : <Eye size={15} />}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleCopy(entry.password, `p-${entry.id}`)}
                                            aria-label="Copy password"
                                            className="text-gray-400 hover:text-emerald-600 shrink-0"
                                        >
                                            {copiedId === `p-${entry.id}` ? (
                                                <Check size={15} />
                                            ) : (
                                                <Copy size={15} />
                                            )}
                                        </button>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => handleDelete(entry.id)}
                                        aria-label="Delete password"
                                        className="text-gray-400 hover:text-red-500 self-end sm:self-auto shrink-0"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}

export default Manager