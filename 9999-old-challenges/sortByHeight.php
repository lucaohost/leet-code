<?php
function sortByHeight($people)
{
    $onlyPeople = array_filter($people, function ($person) { if($person !== -1){return $person;}});
    sort($onlyPeople);
    foreach($people as &$person){
        if($person !== -1){
            $person = array_shift($onlyPeople);
        }
    }
    return $people;
}