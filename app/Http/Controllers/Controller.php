<?php

namespace App\Http\Controllers;

final class Controller
{
    /**
     * Layout words.
     * 
     * @var array
     */
    private array $layout_words = [];


    /**
     * Set layout words
     * 
     * @param array $words
     * @return array
     */
    final protected function setLayoutWords(array $words): array
    {
        $this->layout_words = array_unique(array_merge($this->layout_words, $words));
        return $this->layout_words;
    }

    /**
     * Get layout words
     * 
     * @return array
     */
    final protected function getLayoutWords(): array
    {
        return $this->layout_words;
    }
}
